// src/Mirage/server.js
import { createServer, Model } from "miragejs";

// Define and export the makeServer function
export function makeServer() {
  const server = createServer({
    models: {
      van: Model,
      user: Model,
    },

    // Define routes
    routes() {
      this.namespace = "api"; // Set the namespace for the API
      this.timing = 1000; // Simulate a 1-second delay for API responses

      // Endpoint to get all vans
      this.get("/vans", (schema) => {
        return schema.vans.all(); // Return all vans from the MirageJS schema
      });

      // Endpoint to filter vans by type (query parameter)
      this.get("/vans", (schema, request) => {
        const type = request.queryParams.type;
        if (type) {
          return schema.vans.where({ type }); // Filter vans by type
        }
        return schema.vans.all(); // Return all vans if no type query param is provided
      });

      // Endpoint to get users (optional)
      this.get("/users", (schema) => {
        return schema.users.all();
      });
    },

    // Seeds initial data from db.json file
    seeds(server) {
      const vansData = [
        {
          id: "1",
          name: "Modest Explorer",
          price: 60,
          description: "A simple van for nature lovers.",
          type: "simple",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/2j2WHTgb/Simple1.jpg",
        },
        {
          id: "2",
          name: "Beach Bum",
          price: 80,
          description: "Surfer-inspired portable home.",
          type: "simple",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/7YR24hHq/Simple2.jpg",
        },
        {
          id: "3",
          name: "Reliable Red",
          price: 100,
          description: "Van with a cozy kitchen.",
          type: "simple",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/0yJJyvjD/simple3.jpg",
        },
        {
          id: "4",
          name: "Dreamfinder",
          price: 65,
          description: "Spacious and comfortable travel van.",
          type: "simple",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/2ycBV8nF/simple4.jpg",
        },
        {
          id: "5",
          name: "The Royal Cruiser",
          price: 200,
          description: "Luxury van with full kitchen and plush interior.",
          type: "luxury",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/wBqHb5CM/luxury1.jpg",
        },
        {
          id: "6",
          name: "The Elite Explorer",
          price: 250,
          description: "Elegant luxury van for adventurers.",
          type: "luxury",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/DwdngpYR/luxury2.jpg",
        },
        {
          id: "7",
          name: "Luxuriana",
          price: 300,
          description: "Ultimate luxury and comfort for the road.",
          type: "luxury",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/tRwqCxxv/luxury3.jpg",
        },
        {
          id: "8",
          name: "The Grand Voyager",
          price: 350,
          description: "Top-tier van with gourmet kitchen.",
          type: "luxury",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/DyG2WwQv/luxury4.jpg",
        },
        {
          id: "9",
          name: "Rugged Outlaw",
          price: 120,
          description: "Off-road ready van for the adventurous spirit.",
          type: "rugged",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/5yhbPhJW/rugged1.jpg",
        },
        {
          id: "10",
          name: "Wild Rover",
          price: 140,
          description: "Built for extreme terrains with extra storage.",
          type: "rugged",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/13ZyD1Mp/rugged2.jpg",
        },
        {
          id: "11",
          name: "The Nomad",
          price: 160,
          description:
            "Designed for tough conditions, with solar-powered electricity.",
          type: "rugged",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/2ybC7zPx/rugged3.jpg",
        },
        {
          id: "12",
          name: "Trailblazer",
          price: 180,
          description: "Tackles any terrain with mud tires and winch.",
          type: "rugged",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/qRZkKtZR/rugged4.jpg",
        },
      ];

      // Seed vans data into MirageJS
      vansData.forEach((van) => {
        server.create("van", van);
      });

      // Optional: Seed users data (you can modify this part based on your needs)
      const usersData = [
        {
          id: "1",
          username: "john_doe",
          email: "john@example.com",
          password: "password123",
          phone: "0904964674",
        },
      ];

      usersData.forEach((user) => {
        server.create("user", user);
      });
    },
  });

  return server;
}
