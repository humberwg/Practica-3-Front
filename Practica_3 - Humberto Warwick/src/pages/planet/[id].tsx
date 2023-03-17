import Planeta from "@/components/Planet";

type PlanetProps={

    name:string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];
    films: string[];
    url: string;
    created: string;
    edited: string;
};

//Llamada a la API desde el servidor y no desde el cliente al pedir el personaje
const Planet = (props: PlanetProps) => {
    return (
        <>
            <Planeta data={props}></Planeta>
        </>
    );
};

export default Planet;