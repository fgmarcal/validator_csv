import React from 'react';
import { Container } from './styles';
import CSVHandler from '../components/CSVHandler';
import Header from '../components/header';


const Home:React.FC = ()=>{


    return (
        <>
            <Container>
                <Header />
                <CSVHandler />
            </Container>

        </>
    )
}

export default Home;