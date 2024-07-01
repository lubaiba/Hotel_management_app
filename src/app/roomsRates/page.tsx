"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "./roomSlice";
import { AppDispatch,RootState } from "../store/store";
import MediaCard from "../components/Card";
import styles from "../page.module.css";

export default function page() {
  const dispatch=useDispatch<AppDispatch>();
  const rooms=useSelector((state: RootState) => state.rooms.rooms)
  const inProgress = useSelector((state: RootState) => state.rooms.inProgress);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className={styles.card}>
       {inProgress ? (
        <p>Loading...</p>
      ) : rooms.length > 0 ? (
        rooms.map((room: any) => {
          return <MediaCard key={room.id} room={room} />;
        })
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
}
