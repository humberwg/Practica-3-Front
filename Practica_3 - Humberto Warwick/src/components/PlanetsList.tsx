import React from 'react';
import Link from 'next/link';

type PlanetsListProps = {
    planets:{name: string, url: string}[];
}
 
 const PlanetsList = (props: PlanetsListProps) => {
    return (
    <>
    <div>
        {
        props.planets.map(planet => (
        <>
        <Link href={`/planet/${planet.url}`}>{planet.name}</Link><br />
        </>
        ))
        }
        </div>
        </>
        )
    };

export default PlanetsList;