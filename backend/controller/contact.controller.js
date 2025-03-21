import Contact from "../model/contact.model.js";

export const addContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new contact message
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // Only log in development mode
        if (process.env.NODE_ENV !== "production") {
            console.log("Received request:", req.body);
            console.log("Contact saved:", newContact);
        }

        res.status(201).json({ message: "Message sent successfully", contact: newContact });
    } catch (error) {
        console.error("Error saving contact message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
