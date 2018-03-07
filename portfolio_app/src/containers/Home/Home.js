import React, {Component} from 'react';
import {Container} from '../../theme/grid';
import  {Image, Wrapper} from  './Home.style';

export default class Home extends Component {
   // static propTypes = {};

    render() {
        return (
        <Container>
            <Wrapper>
            <h1>Roman Foltyn</h1>
            <h2>Front-end Developer</h2>
            <Image src={require('../../assets/me.png')} alt="myself"/>
            </Wrapper>
            <p>
                    Lorem ipsum dolor sit amet, atqui latine aliquam ex has. Usu an choro decore noluisse, ad per putant adipisci interpretaris. Usu an nemore sanctus fuisset. Ex natum abhorreant his, veniam mediocritatem per ex, eum ad dicunt percipit honestatis. Vim ex quando vulputate. Scripserit efficiantur et vel. Semper fabulas vel ei, ea qui delectus partiendo, ea sadipscing temporibus vis.
                    Stet elaboraret no sea. Eu eam errem dicam ancillae, intellegebat consequuntur id qui, sit velit quando corrumpit ut. Alii labore dolores in his. Patrioque tincidunt contentiones ei vix, adhuc doming euismod sed at. Officiis hendrerit per ex. Ius id docendi conceptam, agam impetus ex vis.
                    Duo discere sensibus et. Qui no equidem quaestio, te omnes oporteat est. Malorum platonem no has, euismod docendi blandit has te. Vis regione omittantur te.
                    Nec cu porro affert neglegentur, homero possim platonem ei mea, mucius admodum ius ei. No duo appareat erroribus, id vis gloriatur percipitur. In consulatu forensibus percipitur sed, quem populo no usu. Quo an moderatius ullamcorper. Ne stet novum audire pri, eum diceret albucius sadipscing at, et per verear habemus. Ad qui ponderum deserunt perpetua.
                    Sit natum aeterno ancillae at, in pro aeterno legendos. Mel quem sapientem ne. Ut impedit denique invenire est. Mei melius euripidis conceptam eu, eam an tota illud nihil, an utamur volumus sit.
                    Modus hendrerit at has. liberavisse ne, nec cu eirmod nonumes corpora, mucius lucilius ut sed. Eam ne labores sapientem. Error accusata consulatu eam no. Mel at tempor intellegat appellantu
                </p>
        </Container>
        )
    }
}
