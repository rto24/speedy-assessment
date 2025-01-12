import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown";
import { ActivitySearchParams } from "@/types/search";
import { recentStreams } from "@/data/data";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

const DataTable: React.FC = () => {
  const [ searchParams, setSearchParams ] = useState<ActivitySearchParams>({ term: "", filters: {} });
  const [ dropdownSearch, setDropdownSearch ] = useState<string>("");

  const artists = useMemo(() => {
    return Array.from(new Set(recentStreams.map((stream) => stream.artist)));
  }, []);

  const songs = useMemo(() => {
    return Array.from(new Set(recentStreams.map((stream) => stream.songName)));
  }, []);

  const users = useMemo(() => {
    return Array.from(new Set(recentStreams.map((stream) => stream.userId)));
  }, []);

  const filteredData = useMemo(() => {
    return recentStreams.filter(
      (stream) =>
        (!searchParams.term ||
          stream.artist.toLowerCase().includes(searchParams.term.toLowerCase()) ||
          stream.songName.toLowerCase().includes(searchParams.term.toLowerCase()) ||
          stream.userId.toLowerCase().includes(searchParams.term.toLowerCase())) &&
        (!searchParams.filters.artist || searchParams.filters.artist?.length === 0 || searchParams.filters.artist?.includes(stream.artist)) &&
        (!searchParams.filters.songName || searchParams.filters.songName?.length === 0 || searchParams.filters.songName?.includes(stream.songName)) &&
        (!searchParams.filters.userId || searchParams.filters.userId?.length === 0 || searchParams.filters.userId?.includes(stream.userId))
    );
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setDropdownSearch(value);
  };

  //Sets search params filters upon selection
  const handleFilter = (filterKey: keyof ActivitySearchParams["filters"], value: string) => {
    setSearchParams((prev) => {
      const currentValues = prev.filters[filterKey] || [];
      const selected = currentValues.includes(value);

      return {
        ...prev,
        filters: {
          ...prev.filters,
          [filterKey]: selected
            ? currentValues.filter((val: string) => val !== value)
            : [...currentValues, value],
        },
      };
    });
  };

  const getFilteredItems = (items: string[]) => {
    return items.filter((item) => item.toLowerCase().includes(dropdownSearch.toLowerCase()));
  };

  return (
    <div>
      {/* Search and Filters */}
      <div className="flex gap-10 m-3">
        {/* Artist Filter */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                Filter by Artists
                <ChevronDown className="ml-1 w-4 h-4"/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="relative w-full">
                <Search className="absolute top-1/2 left-2 transform -translate-y-4 text-gray-500 z-10" />
                <input
                  type="text"
                  placeholder="Filter artist"
                  value={dropdownSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full p-2 mb-3 pl-10 border rounded-md by-gray-100 text-black"
                />
              </div>
              <div>
                {getFilteredItems(artists).map((artist, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilter("artist", artist)}
                    className={
                      "rounded-md p-2 m-1 gap-2" + (
                      searchParams.filters.artist?.includes(artist)
                        ? "m-2 bg-orange-300"
                        : "m-2 bg-white"
                      )
                    }
                  >
                    {artist}
                  </button>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Song Filter */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                Filter by Songs
                <ChevronDown className="ml-1 w-4 h-4"/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="relative w-full">
                <Search className="absolute top-1/2 left-2 transform -translate-y-4 text-gray-500 z-10" />
                <input
                  type="text"
                  placeholder="Filter artist"
                  value={dropdownSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full p-2 mb-3 pl-10 border rounded-md by-gray-100 text-black"
                />
              </div>
              <div>
                {getFilteredItems(songs).map((song, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilter("songName", song)}
                    className={
                      "rounded-md p-2 m-1 gap-2" + (
                      searchParams.filters.songName?.includes(song)
                        ? "m-2 bg-orange-300"
                        : "m-2 bg-white"
                      )
                    }
                  >
                    {song}
                  </button>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* User Filter */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                Filter by Users
                <ChevronDown className="ml-1 w-4 h-4"/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="relative w-full">
                <Search className="absolute top-1/2 left-2 transform -translate-y-4 text-gray-500 z-10" />
                <input
                  type="text"
                  placeholder="Filter artist"
                  value={dropdownSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full p-2 mb-3 pl-10 border rounded-md by-gray-100 text-black"
                />
              </div>
              <div>
                {getFilteredItems(users).map((user, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilter("userId", user)}
                    className={
                      "rounded-md p-2 m-1 gap-2" + (
                      searchParams.filters.userId?.includes(user)
                        ? "m-2 bg-orange-300"
                        : "m-2 bg-white"
                      )
                    }
                  >
                    {user}
                  </button>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table Contents */}
      <Table>
        <TableCaption>A list of recent user activity.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Song Name</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead>Stream Count</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((stream, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={stream.userProfileImg}
                      width={50}
                      height={50}
                      alt="profile-image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="font-bold">{stream.userId}</p>
                </div>
              </TableCell>
              <TableCell>{stream.songName}</TableCell>
              <TableCell>{stream.artist}</TableCell>
              <TableCell>{stream.streamCount.toLocaleString()}</TableCell>
              <TableCell>
                {stream.streamDate.toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable;