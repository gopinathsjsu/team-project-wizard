import '@mantine/core/styles.css';
import { Container, PasswordInput, Text,  Card, Image } from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandMeta } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Movie } from '../MovieInterface';
const MovieBanner: React.FC<Movie> = ({title, genres, posterUrl}) =>{

    return(
        <Card key={0} shadow="sm" p="lg" withBorder={false} style={{ width: 223, height: 450 }}>
            <Card.Section>
                <Image src={posterUrl} height={365} alt={title} />
            </Card.Section>
            <Text fw={500} size="lg" mt="sm">
                {title}
            </Text>
            <Text size="sm" style={{color: "grey"}}>
                {genres.join("/ ")}
            </Text>
        </Card>
    );
}

export default MovieBanner;