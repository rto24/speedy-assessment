import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/data-table";
import { ActivitySearchParams } from "@/types/search";
import { recentStreams } from "@/data/data";
import Image from "next/image";

const DataTable: React.FC = () => {
  const [ searchParams, setSearchParams ] = useState<ActivitySearchParams>({ term: "", filters: {} })

  return (
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
        {recentStreams.map((stream, index) => (
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
  )
}

export default DataTable;