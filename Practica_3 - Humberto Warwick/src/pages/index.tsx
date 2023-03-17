import Menu from '@/components/PlanetsList'

type PlanetList = {
  name: string;
  url: string;
}

export async function getServerSideProps(){
      let planetList: PlanetList[] = [];
      for (let page = 1; page<=6; page ++) {
          let res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
          const json = await res.json();

          json.results.forEach((planet:any) => {
              let idArr = planet.url.split("/");
              planetList.push({name:planet.name, url:idArr[5]})
          })
      }
    
  return {
      props: {
        planets: planetList
      }
  }
}

type PageProps = {
  planets: {
    name: string, 
    url: string
  }[]
}

export default function Home(props: PageProps) {
  let page = 1;
  if(props.planets.length === 0) {
    return (
    <div>Cargando</div>
    )
  } else {
      return(
      <><button onClick={() => page++}>Next</button> 
      <>
        <Menu planets={props.planets}></Menu>
        </>
        </>
        )
      }
    }