import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown";
import { ActivitySearchParams} from "@/types/search";
import { recentStreams } from "@/data/data";
import Image from "next/image";
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  ClockArrowDown,
  ClockArrowUp, 
  Search 
} from "lucide-react";

const DataTable: React.FC = () => {
  const [ searchParams, setSearchParams ] = useState<ActivitySearchParams>({ term: "", filters: {} });
  const [ dropdownSearch, setDropdownSearch ] = useState<string>("");
  const [ streamCountSort, setStreamCountSort ] = useState<"default" | "ascending" | "descending">("default");
  const [ streamDateSort, setStreamDateSort ] = useState<"default" | "ascending" | "descending">("default");

  //Pagination page state
  const [ currPage, setCurrPage ] = useState<number>(1);
  const itemsPerPage = 4;
  
  //Memo for artists, songs, and users
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
    return recentStreams.filter((stream) =>
      (!searchParams.term ||
        stream.artist.toLowerCase().includes(searchParams.term.toLowerCase()) ||
        stream.songName.toLowerCase().includes(searchParams.term.toLowerCase()) ||
        stream.userId.toLowerCase().includes(searchParams.term.toLowerCase())) &&
      (!searchParams.filters.artist || searchParams.filters.artist?.length === 0 || searchParams.filters.artist?.includes(stream.artist)) &&
      (!searchParams.filters.songName || searchParams.filters.songName?.length === 0 || searchParams.filters.songName?.includes(stream.songName)) &&
      (!searchParams.filters.userId || searchParams.filters.userId?.length === 0 || searchParams.filters.userId?.includes(stream.userId))
    );
  }, [searchParams]);
  
  //Sorting functionality for stream count and date
  const sortedData = useMemo(() => {
    const currentData = [...filteredData];
    if (streamCountSort !== "default") {
      currentData.sort((a, b) =>
        streamCountSort === "ascending"
          ? b.streamCount - a.streamCount
          : a.streamCount - b.streamCount
      );
    }

    if (streamDateSort !== "default") {
      currentData.sort((a, b) =>
        streamDateSort === "ascending"
          ? new Date(b.streamDate).getTime() - new Date(a.streamDate).getTime()
          : new Date(a.streamDate).getTime() - new Date(b.streamDate).getTime()
      );
    }
    return currentData;
  }, [filteredData, streamCountSort, streamDateSort]);

  const handleSort = (key: string) => {
    if (key === "streamCount") {
      setStreamCountSort((prev) => 
        prev === "default"
          ? "ascending"
          : prev === "ascending"
          ? "descending"
          : "default"
      );
      setStreamDateSort("default");
    } else if (key === "streamDate") {
      setStreamDateSort((prev) =>
        prev === "default"
          ? "ascending"
          : prev === "ascending"
          ? "descending"
          : "default"
      );
      setStreamCountSort("default");
    }
  };
      
  const paginatedData = useMemo(() => {
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currPage, itemsPerPage]);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrPage(page);
    }
  };

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
    setCurrPage(1);
  };

  const getFilteredItems = (items: string[]) => {
    return items.filter((item) => item.toLowerCase().includes(dropdownSearch.toLowerCase()));
  };
  
  return (
    <div>
      {/* Table Contents */}
      <Table>
        <TableHeader>
          <TableRow>
            {/* User Filter */}
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center">
                    Users
                    <ChevronDown className="ml-1 w-4 h-4"/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="flex flex-wrap max-w-md gap-2 p-4"
                >
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
            </TableHead>

            <TableHead>
              {/* Song Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center">
                    Song Name
                    <ChevronDown className="ml-1 w-4 h-4"/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="flex flex-wrap max-w-md gap-2 p-4"
                >
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
            </TableHead>

            <TableHead>
              {/* Artist Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center">
                    Artists
                    <ChevronDown className="ml-1 w-4 h-4"/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="flex flex-wrap max-w-md gap-2 p-4"
                >
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
            </TableHead>
            <TableHead
              onClick={() => handleSort("streamCount")}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                Stream Count
                {streamCountSort === "ascending"
                  ? <TrendingUp className="ml-1 w-4 h-4"/>
                  : streamCountSort === "descending"
                  ? <TrendingDown className="ml-1 w-4 h-4"/>
                  : <Minus className="ml-1 w-4 h-4"/>
                }
              </div>
            </TableHead>
            <TableHead
              onClick={() => handleSort("streamDate")}
            >
              <div className="flex items-center">
                Date
                {streamDateSort === "ascending"
                  ? <ClockArrowUp className="ml-1 w-4 h-4"/>
                  : streamDateSort === "descending"
                  ? <ClockArrowDown className="ml-1 w-4 h-4"/>
                  : <Minus className="ml-1 w-4 h-4"/>
                }
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((stream, index) => (
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

       {/* Pagination */}
       <div className="flex justify-center gap-2">
          <ChevronLeft 
            onClick={() => handlePageChange(currPage - 1)}
            className="cursor-pointer"
          />
          <p>Page {currPage} of {totalPages}</p>
          <ChevronRight
            onClick={() => handlePageChange(currPage + 1)}
            className="cursor-pointer"
          />
        </div>
    </div>
  )
}

export default DataTable;