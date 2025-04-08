import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    user: Model,
    van: Model,
  },

  seeds(server) {
    // Create a default user
    server.create("user", {
      id: "1",
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
      phone: "0904964674",
    });

    // Create 12 vans with varying types
    const vans = [
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
        description: "Designed for tough conditions with solar power.",
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

    vans.forEach((van) => server.create("van", van));
  },

  routes() {
    this.namespace = "/api";

    // Get all vans, with optional filtering by type
    this.get("/vans", (schema, request) => {
      let vans = schema.vans.all();
      const type = request.queryParams.type;

      if (type) {
        vans = vans.filter((van) => van.type === type);
      }

      return vans;
    });

    // Get single van by ID
    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    // Signup a new user
    this.post("/signup", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const existingUser = schema.users.findBy({ email: attrs.email });

      if (existingUser) {
        return new Response(400, {}, { error: "User already exists!" });
      }

      const newUser = schema.users.create(attrs);
      return {
        message: "Signup successful",
        user: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          phone: newUser.phone,
        },
      };
    });

    // Login user and return a fake token
    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ email });

      if (!user || user.password !== password) {
        return new Response(401, {}, { error: "Invalid email or password" });
      }

      const fakeToken = `fake-jwt-token-${user.id}`;
      return {
        message: "Login successful",
        token: fakeToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
        },
      };
    });
  },
});
