import React from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Deck from '../SwappingPage/components/Deck'

import {
    Container,
    Sliderc,
    ContentTitle,
    Title,
    Section,
    BarsMod,
    Like,
    Dislike,
    Heart
} from './styles'

class SwappingPage extends React.PureComponent {

    render() {
        return (
            <Container>
                <Section>
                    <Title value='<'>{'<'}</Title>
                    <div></div>
                    <BarsMod icon={faBars} size="4x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                    <BarsMod icon={faBars} size="2x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                </Section>
                <Heart src="https://i.imgur.com/2xEnz4G.png" />
                <Dislike src="https://i.imgur.com/oZdalUm.png" />
                <ContentTitle>{this.props.location.state.category}</ContentTitle>
                <Sliderc>
                    <Deck category={this.props.location.state.category} />
                </Sliderc>
                <Like src="https://i.imgur.com/jYPiJaw.gif" />
            </Container>
        )
    }
}

export default SwappingPage;