# TrusterLabs Backend

This is the backend service for TrusterLabs, hosted at:  
[https://trusterlabs-production.up.railway.app/](https://trusterlabs-production.up.railway.app/)

## API Endpoints

### 1. View All Subscribers

- **Endpoint:** `GET /api/subscribers`
- **URL:** [https://trusterlabs-production.up.railway.app/api/subscribers](https://trusterlabs-production.up.railway.app/api/subscribers)
- **Description:** Retrieves a list of all newsletter subscribers.
- **Request Body:** None

### 2. Subscribe to Newsletter

- **Endpoint:** `POST /api/subscribe`
- **URL:** [https://trusterlabs-production.up.railway.app/api/subscribe](https://trusterlabs-production.up.railway.app/api/subscribe)
- **Description:** Adds a new subscriber to the newsletter.
- **Request Body:**  
    ```json
    {
        "email": "user@example.com"
    }
    ```

### 3. Send Bulk Emails

- **Endpoint:** `POST /api/send-emails`
- **URL:** [https://trusterlabs-production.up.railway.app/api/send-emails](https://trusterlabs-production.up.railway.app/api/send-emails)
- **Description:** Sends bulk emails to all subscribers.
- **Request Body:** None

---

Feel free to use tools like [Postman](https://www.postman.com/) or `curl` to interact with these endpoints.