import { Container, VStack, Box, Text, Flex, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
});

const bikePumpStations = [
  { id: 1, name: "Station 1", position: [59.3293, 18.0686] },
  { id: 2, name: "Station 2", position: [59.33258, 18.0649] },
  { id: 3, name: "Station 3", position: [59.334591, 18.06324] },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Stockholm Bike Pump Stations
        </Heading>
      </Flex>
      <Box height="calc(100vh - 80px)">
        <MapContainer
          center={[59.3293, 18.0686]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map((station) => (
            <Marker
              key={station.id}
              position={station.position}
              icon={bikePumpIcon}
            >
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default Index;