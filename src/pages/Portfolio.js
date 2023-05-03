import Element from '../element.js';

const Portfolio = () => {
    return (<div class="row">
        <div class="col-sm-4">
            <Element element="Joulun Taikaa" 
                image="https://img.itch.zone/aW1nLzExMDM2ODkyLnBuZw==/original/PYLeR1.png"
                imageAlt="Joulun Taikaa Logo"
                text="Tassa on mun suurin peli joka on horror peli tehty Unity:lla"
                link="https://three-kiddos-studios.itch.io/joulun-taikaa-full-version" />
        </div>
        <div class="col-sm-4">
            <Element element="Duck Hunt 64"
                image="https://img.itch.zone/aW1nLzU0MTc2NjgucG5n/347x500/ocKO3z.png"
                imageAlt="Joulun Taikaa Logo"
                text="Tassa on Duck Hunt nes:lle mutta vaan n64, tama oli tehty gameJamille"
                link="https://three-kiddos-studios.itch.io/duck-hunt-64" />
        </div>

        <div class="col-sm-4">
            <Element element="Koulun Taikaa"
                image="%PUBLIC_URL%/logo512.png"
                imageAlt="Koulun Taikaa Logo"
                text="Tassa on mun seuraava peli, se ei ole viela valmis kylla."
                link="https://three-kiddos-studios.itch.io/duck-hunt-64" />
        </div>
    </div>);
};

export default Portfolio;