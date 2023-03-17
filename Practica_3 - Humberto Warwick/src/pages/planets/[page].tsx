import Link from "next/link";
import Menu from "@/components/PlanetsList";

type ServerSideProps = {
    params:{
        page: string;
    }
};

type PlanetProps={
    name:string;
    url: string;
};

export async function getServerSideProps(props: ServerSideProps){
    const page = props.params.page;
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const json =await res.json();
    let myplanets: PlanetProps[] = [];
    json.results.forEach(async (planet: PlanetProps) => {
        let idArr = planet.url.split("/");
        myplanets.push({name:planet.name, url:idArr[5]});
    });
    return {props: {planets: myplanets}};
};

type PageProps = {
    planets:{name: string, url: string}[];
}

const Planet = (props: PageProps) => {
    let page = 1;
    return (
        <>
            <button onClick={() => page++}>Next</button>
            <button onClick={() => page--}>Previous</button>
            <Menu planets={props.planets}></Menu>
        </>
    );
};

export default Planet;