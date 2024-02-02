import React from "react";

import './HomePage.css';

let naslovniTekst1 = `Dobrodošli u Svet Psihološkog Savetovanja, gde se vaša unutarnja snaga susreće sa stručnim vodstvom. Nudimo podršku u suočavanju s životnim izazovima, osnažujući vas da prevaziđete teškoće i izgradite dublje razumevanje samih sebe.`
let naslovniTekst2 = `Naš tim iskusnih psihologa posvećen je pružanju pažljivog i personalizovanog pristupa, koristeći raznovrsne metode i tehnike koje podržavaju vaš emotivni i mentalni balans. Bez obzira da li se suočavate sa stresom, anksioznošću, depresijom ili traumom, zajedno ćemo istražiti puteve ka emocionalnom blagostanju.

Uz podršku našeg tima, otkrićete nove perspektive, razviti veštine samopomoći i stvoriti temelje za dugotrajne promene. Posvetite se sebi, pronađite mir u sadašnjem trenutku i gradite srećniji i ispunjeniji život.

Započnite svoje putovanje ka unutarnjoj ravnoteži danas. Očekujemo vas sa otvorenim srcem i spremni smo biti deo vaše transformacije.`

const HomePage = () => {
    return (
        <div className="home">
            <div className='overlay-text'>
                <h2 className='upper-text'>{naslovniTekst1}</h2>
                <hr />
                <h2 className='bottom-text'>{naslovniTekst2}</h2>
            </div>
            <div className='overlay-image'>
                <img className="cover-photo" src="/Assets/Images/psihologija.jpg" alt="Slika" />
            </div>
        </div>
    );
};

export default HomePage;