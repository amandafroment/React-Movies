import React, { useEffect } from "react";
import ActorCard from "../../components/ActorCard/ActorCard";
import { useState } from "react";

export default function ActorListPage({ uniqueActors }) {
  return (
    <>
      <div>
        <h1>Actors List</h1>
        {Array.from(uniqueActors).map((actor, idx) => (
          <ActorCard key={idx} actor={actor} />
        ))}
      </div>
    </>
  );
}
