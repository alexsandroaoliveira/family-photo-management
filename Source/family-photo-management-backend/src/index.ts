import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/users/:userId/albums", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

app.get("/albums/:albumId/photos", async (req: Request, res: Response) => {
  try {
    const albumId = parseInt(req.params.albumId, 10);

    if (isNaN(albumId)) {
      return res.status(400).json({ error: "Invalid Album ID" });
    }

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

app.post("/albums", async (req, res) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/albums`,
      req
    );
    return response.data;
  } catch (error) {
    console.error("Error adding album:", error);
    res.status(500).json({ error: "Failed to add album" });
  }
});

app.post("/photos", async (req, res) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/photos`,
      req
    );
    return response.data;
  } catch (error) {
    console.error("Error adding albums:", error);
    res.status(500).json({ error: "Failed to add photo" });
  }
});

app.delete("/albums/:albumId", async (req, res) => {
  try {
    const albumId = parseInt(req.params.albumId, 10);

    if (isNaN(albumId)) {
      return res.status(400).json({ error: "Invalid Album ID" });
    }

    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting albums:", error);
    res.status(500).json({ error: "Failed to delete albums" });
  }
});

app.delete("/photos/:photoId", async (req, res) => {
  try {
    const photoId = parseInt(req.params.photoId, 10);

    if (isNaN(photoId)) {
      return res.status(400).json({ error: "Invalid Photo ID" });
    }

    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/photos/${photoId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting photos:", error);
    res.status(500).json({ error: "Failed to delete photos" });
  }
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
