import Link from "next/link";
import { useEffect, useState } from "react";

type PlanetProps={
    name:string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
};

const Planeta = () => {
    const [data, setData] = useState<PlanetProps>({ name: " ", diameter: " ", rotation_period: " ", orbital_period: " ", gravity: " ", population: " ", climate: " ", terrain: " ", surface_water: " ", residents: [], films: [], url: " ", created: " ", edited: " " });
    const fetchData = async () => {
        var id = window.location.pathname.split("/")[2];
        const res = await fetch(`https://swapi.dev/api/planets/${id}`);
        const json = await res.json();
        json.residents = await Promise.all(json.residents.map(async (url: string) => {
            const res = await fetch(url);
            const json = await res.json();
            return json.name;
        }));
        json.films = await Promise.all(json.films.map(async (url: string) => {
            const res = await fetch(url);
            const json = await res.json();
            return json.title;
        }));
        setData(json);
    }

        useEffect(() => {
            fetchData();
        }, []);

    return (
        <>
            <Link href="/">Ir a la lista</Link> <br />
            <h1>Name: {data.name}</h1>
            <p>Rotation period: {data.rotation_period}</p>
            <p>Orbital period: {data.orbital_period}</p>
            <p>Diameter: {data.diameter}</p>
            <p>Climate: {data.climate}</p>
            <p>Gravity: {data.gravity}</p>
            <p>Terrain: {data.terrain}</p>
            <p>Surface water: {data.surface_water}</p>
            <p>Population: {data.population}</p>
            <p>Residents: {data.residents}</p>
            <p>Films: {data.films}</p>
            <p>Created: {data.created}</p>
            <p>Edited: {data.edited}</p>
            <p>Url: {data.url}</p>
        </>
    )

};

export default Planeta