import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/patients", async (req, res) => {
    try {
      const username = "coalition";
      const password = "skills-test";
      const authString = Buffer.from(`${username}:${password}`).toString('base64');
      
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            'Authorization': `Basic ${authString}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const patients = await response.json();
      const jessicaTaylor = patients.find((p: any) => p.name === "Jessica Taylor");
      
      if (!jessicaTaylor) {
        return res.status(404).json({ message: "Patient not found" });
      }

      res.json(jessicaTaylor);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      res.status(500).json({ 
        message: "Failed to fetch patient data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/api/patients/all", async (req, res) => {
    try {
      const username = "coalition";
      const password = "skills-test";
      const authString = Buffer.from(`${username}:${password}`).toString('base64');
      
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            'Authorization': `Basic ${authString}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const patients = await response.json();
      res.json(patients);
    } catch (error) {
      console.error("Error fetching patients data:", error);
      res.status(500).json({ 
        message: "Failed to fetch patients data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
