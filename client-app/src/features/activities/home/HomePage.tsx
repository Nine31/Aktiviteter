import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
           <h1>Hem</h1>
           <h3>Gå till <Link to='/activities'>Aktiviteter</Link></h3>
        </Container>
    )
}