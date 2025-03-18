// Fare data from the provided chart
const fareData = {
    "Howrah Maidan": { "Howrah Maidan": 0, "Howrah": 5, "Mahakaran": 10, "Esplanade": 10, "Dakshineswar": 30, "Baranagar": 30, "Noapara": 30, "Dum Dum": 25, "Belgachhia": 25, "Shyambazaar": 25, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 25, "Rabindra Sarobar": 25, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 30, "Gitanjali": 30, "Kavi Nazrul": 30, "Shahid Khudiram": 30, "Kavi Subhash": 30, "Satyajit Ray": 35, "Jyotirindra Nandi": 40, "Kavi Sukanta": 40, "Hemanta Mukhopadhyay": 50 },
    "Howrah": { "Howrah Maidan": 5, "Howrah": 0, "Mahakaran": 10, "Esplanade": 10, "Dakshineswar": 30, "Baranagar": 30, "Noapara": 30, "Dum Dum": 25, "Belgachhia": 25, "Shyambazaar": 25, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 25, "Rabindra Sarobar": 25, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 30, "Gitanjali": 30, "Kavi Nazrul": 30, "Shahid Khudiram": 30, "Kavi Subhash": 30, "Satyajit Ray": 35, "Jyotirindra Nandi": 40, "Kavi Sukanta": 40, "Hemanta Mukhopadhyay": 50 },
    "Mahakaran": { "Howrah Maidan": 10, "Howrah": 10, "Mahakaran": 0, "Esplanade": 5, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 10, "Chandni Chowk": 10, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 25, "Gitanjali": 25, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Esplanade": { "Howrah Maidan": 10, "Howrah": 10, "Mahakaran": 5, "Esplanade": 0, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 15, "Belgachhia": 15, "Shyambazaar": 15, "Shobhabazar Sutanuti": 10, "Girish Park": 10, "Mahatma Gandhi Road": 10, "Central": 5, "Chandni Chowk": 5, "Park Street": 5, "Maidan": 5, "Rabindra Sadan": 10, "Netaji Bhavan": 10, "Jatin Das Park": 10, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Dakshineswar": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 0, "Baranagar": 5, "Noapara": 10, "Dum Dum": 15, "Belgachhia": 15, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 25, "Rabindra Sarobar": 25, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 25, "Gitanjali": 25, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Baranagar": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 5, "Baranagar": 0, "Noapara": 10, "Dum Dum": 10, "Belgachhia": 15, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 25, "Gitanjali": 25, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Noapara": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 10, "Baranagar": 10, "Noapara": 0, "Dum Dum": 10, "Belgachhia": 10, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 25, "Masterda Surya Sen": 25, "Gitanjali": 25, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Dum Dum": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 15, "Baranagar": 10, "Noapara": 10, "Dum Dum": 0, "Belgachhia": 10, "Shyambazaar": 10, "Shobhabazar Sutanuti": 10, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 25, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Belgachhia": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 15, "Baranagar": 15, "Noapara": 10, "Dum Dum": 10, "Belgachhia": 0, "Shyambazaar": 5, "Shobhabazar Sutanuti": 10, "Girish Park": 10, "Mahatma Gandhi Road": 10, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 25, "Shahid Khudiram": 25, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Shyambazaar": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 20, "Baranagar": 15, "Noapara": 15, "Dum Dum": 10, "Belgachhia": 5, "Shyambazaar": 0, "Shobhabazar Sutanuti": 5, "Girish Park": 5, "Mahatma Gandhi Road": 10, "Central": 10, "Chandni Chowk": 10, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 20, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Shobhabazar Sutanuti": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 15, "Noapara": 15, "Dum Dum": 10, "Belgachhia": 10, "Shyambazaar": 5, "Shobhabazar Sutanuti": 0, "Girish Park": 5, "Mahatma Gandhi Road": 5, "Central": 10, "Chandni Chowk": 10, "Park Street": 10, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 25, "Satyajit Ray": 30, "Jyotirindra Nandi": 35, "Kavi Sukanta": 35, "Hemanta Mukhopadhyay": 45 },
    "Girish Park": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 15, "Dum Dum": 15, "Belgachhia": 10, "Shyambazaar": 5, "Shobhabazar Sutanuti": 5, "Girish Park": 0, "Mahatma Gandhi Road": 5, "Central": 5, "Chandni Chowk": 10, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Mahatma Gandhi Road": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 15, "Dum Dum": 15, "Belgachhia": 10, "Shyambazaar": 10, "Shobhabazar Sutanuti": 5, "Girish Park": 5, "Mahatma Gandhi Road": 0, "Central": 5, "Chandni Chowk": 5, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 10, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Central": { "Howrah Maidan": 15, "Howrah": 15, "Mahakaran": 10, "Esplanade": 5, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 15, "Dum Dum": 15, "Belgachhia": 15, "Shyambazaar": 10, "Shobhabazar Sutanuti": 10, "Girish Park": 5, "Mahatma Gandhi Road": 5, "Central": 0, "Chandni Chowk": 5, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 10, "Netaji Bhavan": 10, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Chandni Chowk": { "Howrah Maidan": 15, "Howrah": 15, "Mahakaran": 10, "Esplanade": 5, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 15, "Belgachhia": 15, "Shyambazaar": 10, "Shobhabazar Sutanuti": 10, "Girish Park": 10, "Mahatma Gandhi Road": 5, "Central": 5, "Chandni Chowk": 0, "Park Street": 5, "Maidan": 10, "Rabindra Sadan": 10, "Netaji Bhavan": 10, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Park Street": { "Howrah Maidan": 15, "Howrah": 15, "Mahakaran": 10, "Esplanade": 5, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 15, "Belgachhia": 15, "Shyambazaar": 15, "Shobhabazar Sutanuti": 10, "Girish Park": 10, "Mahatma Gandhi Road": 10, "Central": 10, "Chandni Chowk": 5, "Park Street": 0, "Maidan": 5, "Rabindra Sadan": 5, "Netaji Bhavan": 10, "Jatin Das Park": 10, "Kalighat": 10, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 20, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Maidan": { "Howrah Maidan": 15, "Howrah": 15, "Mahakaran": 10, "Esplanade": 5, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 15, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 10, "Mahatma Gandhi Road": 10, "Central": 10, "Chandni Chowk": 10, "Park Street": 5, "Maidan": 0, "Rabindra Sadan": 5, "Netaji Bhavan": 5, "Jatin Das Park": 10, "Kalighat": 10, "Rabindra Sarobar": 10, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 15, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Rabindra Sadan": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 15, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 10, "Central": 10, "Chandni Chowk": 10, "Park Street": 5, "Maidan": 5, "Rabindra Sadan": 0, "Netaji Bhavan": 5, "Jatin Das Park": 5, "Kalighat": 10, "Rabindra Sarobar": 10, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 15, "Gitanjali": 15, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Netaji Bhavan": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 10, "Chandni Chowk": 10, "Park Street": 10, "Maidan": 5, "Rabindra Sadan": 5, "Netaji Bhavan": 0, "Jatin Das Park": 5, "Kalighat": 5, "Rabindra Sarobar": 10, "Mahanayak Uttam Kumar": 10, "Netaji": 15, "Masterda Surya Sen": 15, "Gitanjali": 15, "Kavi Nazrul": 20, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Jatin Das Park": { "Howrah Maidan": 20, "Howrah": 20, "Mahakaran": 15, "Esplanade": 10, "Dakshineswar": 20, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 15, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 15, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 5, "Netaji Bhavan": 5, "Jatin Das Park": 0, "Kalighat": 5, "Rabindra Sarobar": 5, "Mahanayak Uttam Kumar": 10, "Netaji": 15, "Masterda Surya Sen": 15, "Gitanjali": 15, "Kavi Nazrul": 15, "Shahid Khudiram": 20, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Kalighat": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 25, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 15, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 15, "Park Street": 10, "Maidan": 10, "Rabindra Sadan": 10, "Netaji Bhavan": 5, "Jatin Das Park": 5, "Kalighat": 0, "Rabindra Sarobar": 5, "Mahanayak Uttam Kumar": 10, "Netaji": 10, "Masterda Surya Sen": 15, "Gitanjali": 15, "Kavi Nazrul": 15, "Shahid Khudiram": 15, "Kavi Subhash": 20, "Satyajit Ray": 25, "Jyotirindra Nandi": 30, "Kavi Sukanta": 30, "Hemanta Mukhopadhyay": 40 },
    "Rabindra Sarobar": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 25, "Baranagar": 20, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 15, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 10, "Rabindra Sadan": 10, "Netaji Bhavan": 10, "Jatin Das Park": 5, "Kalighat": 5, "Rabindra Sarobar": 0, "Mahanayak Uttam Kumar": 5, "Netaji": 10, "Masterda Surya Sen": 10, "Gitanjali": 15, "Kavi Nazrul": 15, "Shahid Khudiram": 15, "Kavi Subhash": 15, "Satyajit Ray": 20, "Jyotirindra Nandi": 25, "Kavi Sukanta": 25, "Hemanta Mukhopadhyay": 35 },
    "Mahanayak Uttam Kumar": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 20, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 15, "Central": 15, "Chandni Chowk": 15, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 10, "Jatin Das Park": 10, "Kalighat": 10, "Rabindra Sarobar": 5, "Mahanayak Uttam Kumar": 0, "Netaji": 5, "Masterda Surya Sen": 10, "Gitanjali": 10, "Kavi Nazrul": 15, "Shahid Khudiram": 15, "Kavi Subhash": 15, "Satyajit Ray": 20, "Jyotirindra Nandi": 25, "Kavi Sukanta": 25, "Hemanta Mukhopadhyay": 35 },
    "Netaji": { "Howrah Maidan": 25, "Howrah": 25, "Mahakaran": 20, "Esplanade": 15, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 15, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 10, "Rabindra Sarobar": 10, "Mahanayak Uttam Kumar": 5, "Netaji": 0, "Masterda Surya Sen": 5, "Gitanjali": 10, "Kavi Nazrul": 10, "Shahid Khudiram": 15, "Kavi Subhash": 15, "Satyajit Ray": 20, "Jyotirindra Nandi": 25, "Kavi Sukanta": 25, "Hemanta Mukhopadhyay": 35 },
    "Masterda Surya Sen": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 20, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 15, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 10, "Mahanayak Uttam Kumar": 10, "Netaji": 5, "Masterda Surya Sen": 0, "Gitanjali": 5, "Kavi Nazrul": 10, "Shahid Khudiram": 10, "Kavi Subhash": 15, "Satyajit Ray": 20, "Jyotirindra Nandi": 25, "Kavi Sukanta": 25, "Hemanta Mukhopadhyay": 35 },
    "Gitanjali": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 25, "Belgachhia": 20, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 15, "Netaji Bhavan": 15, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 10, "Netaji": 10, "Masterda Surya Sen": 5, "Gitanjali": 0, "Kavi Nazrul": 5, "Shahid Khudiram": 10, "Kavi Subhash": 10, "Satyajit Ray": 15, "Jyotirindra Nandi": 20, "Kavi Sukanta": 20, "Hemanta Mukhopadhyay": 30 },
    "Kavi Nazrul": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 25, "Belgachhia": 25, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 15, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 10, "Masterda Surya Sen": 10, "Gitanjali": 5, "Kavi Nazrul": 0, "Shahid Khudiram": 5, "Kavi Subhash": 10, "Satyajit Ray": 15, "Jyotirindra Nandi": 20, "Kavi Sukanta": 20, "Hemanta Mukhopadhyay": 30 },
    "Shahid Khudiram": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 25, "Belgachhia": 25, "Shyambazaar": 20, "Shobhabazar Sutanuti": 20, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 15, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 10, "Gitanjali": 10, "Kavi Nazrul": 5, "Shahid Khudiram": 0, "Kavi Subhash": 5, "Satyajit Ray": 10, "Jyotirindra Nandi": 15, "Kavi Sukanta": 15, "Hemanta Mukhopadhyay": 25 },
    "Kavi Subhash": { "Howrah Maidan": 30, "Howrah": 30, "Mahakaran": 25, "Esplanade": 20, "Dakshineswar": 25, "Baranagar": 25, "Noapara": 25, "Dum Dum": 25, "Belgachhia": 25, "Shyambazaar": 25, "Shobhabazar Sutanuti": 25, "Girish Park": 20, "Mahatma Gandhi Road": 20, "Central": 20, "Chandni Chowk": 20, "Park Street": 20, "Maidan": 20, "Rabindra Sadan": 20, "Netaji Bhavan": 20, "Jatin Das Park": 20, "Kalighat": 20, "Rabindra Sarobar": 15, "Mahanayak Uttam Kumar": 15, "Netaji": 15, "Masterda Surya Sen": 15, "Gitanjali": 10, "Kavi Nazrul": 10, "Shahid Khudiram": 5, "Kavi Subhash": 0, "Satyajit Ray": 5, "Jyotirindra Nandi": 10, "Kavi Sukanta": 10, "Hemanta Mukhopadhyay": 20 },
    "Satyajit Ray": { "Howrah Maidan": 35, "Howrah": 35, "Mahakaran": 30, "Esplanade": 25, "Dakshineswar": 30, "Baranagar": 30, "Noapara": 30, "Dum Dum": 30, "Belgachhia": 30, "Shyambazaar": 30, "Shobhabazar Sutanuti": 30, "Girish Park": 25, "Mahatma Gandhi Road": 25, "Central": 25, "Chandni Chowk": 25, "Park Street": 25, "Maidan": 25, "Rabindra Sadan": 25, "Netaji Bhavan": 25, "Jatin Das Park": 25, "Kalighat": 25, "Rabindra Sarobar": 20, "Mahanayak Uttam Kumar": 20, "Netaji": 20, "Masterda Surya Sen": 20, "Gitanjali": 15, "Kavi Nazrul": 15, "Shahid Khudiram": 10, "Kavi Subhash": 5, "Satyajit Ray": 0, "Jyotirindra Nandi": 5, "Kavi Sukanta": 10, "Hemanta Mukhopadhyay": 10 },
    "Jyotirindra Nandi": { "Howrah Maidan": 40, "Howrah": 40, "Mahakaran": 35, "Esplanade": 30, "Dakshineswar": 35, "Baranagar": 35, "Noapara": 35, "Dum Dum": 35, "Belgachhia": 35, "Shyambazaar": 35, "Shobhabazar Sutanuti": 35, "Girish Park": 30, "Mahatma Gandhi Road": 30, "Central": 30, "Chandni Chowk": 30, "Park Street": 30, "Maidan": 30, "Rabindra Sadan": 30, "Netaji Bhavan": 30, "Jatin Das Park": 30, "Kalighat": 30, "Rabindra Sarobar": 25, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 25, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 15, "Kavi Subhash": 10, "Satyajit Ray": 5, "Jyotirindra Nandi": 0, "Kavi Sukanta": 5, "Hemanta Mukhopadhyay": 10 },
    "Kavi Sukanta": { "Howrah Maidan": 40, "Howrah": 40, "Mahakaran": 35, "Esplanade": 30, "Dakshineswar": 35, "Baranagar": 35, "Noapara": 35, "Dum Dum": 35, "Belgachhia": 35, "Shyambazaar": 35, "Shobhabazar Sutanuti": 35, "Girish Park": 30, "Mahatma Gandhi Road": 30, "Central": 30, "Chandni Chowk": 30, "Park Street": 30, "Maidan": 30, "Rabindra Sadan": 30, "Netaji Bhavan": 30, "Jatin Das Park": 30, "Kalighat": 30, "Rabindra Sarobar": 25, "Mahanayak Uttam Kumar": 25, "Netaji": 25, "Masterda Surya Sen": 25, "Gitanjali": 20, "Kavi Nazrul": 20, "Shahid Khudiram": 15, "Kavi Subhash": 10, "Satyajit Ray": 10, "Jyotirindra Nandi": 5, "Kavi Sukanta": 0, "Hemanta Mukhopadhyay": 5 },
    "Hemanta Mukhopadhyay": { "Howrah Maidan": 50, "Howrah": 50, "Mahakaran": 45, "Esplanade": 40, "Dakshineswar": 45, "Baranagar": 45, "Noapara": 45, "Dum Dum": 45, "Belgachhia": 45, "Shyambazaar": 45, "Shobhabazar Sutanuti": 45, "Girish Park": 40, "Mahatma Gandhi Road": 40, "Central": 40, "Chandni Chowk": 40, "Park Street": 40, "Maidan": 40, "Rabindra Sadan": 40, "Netaji Bhavan": 40, "Jatin Das Park": 40, "Kalighat": 40, "Rabindra Sarobar": 35, "Mahanayak Uttam Kumar": 35, "Netaji": 35, "Masterda Surya Sen": 35, "Gitanjali": 30, "Kavi Nazrul": 30, "Shahid Khudiram": 25, "Kavi Subhash": 20, "Satyajit Ray": 10, "Jyotirindra Nandi": 10, "Kavi Sukanta": 5, "Hemanta Mukhopadhyay": 0 }
};

// List of stations
const stations = Object.keys(fareData);

// Autocomplete function
function autocomplete(input, arr, dropdownIcon) {
    let currentFocus;
    let isDropdownVisible = false;

    // Handle input typing
    input.addEventListener("input", function(e) {
        const val = this.value.toLowerCase();
        closeAllLists();
        if (!val) return false;
        currentFocus = -1;
        const div = document.createElement("div");
        div.setAttribute("id", this.id + "autocomplete-list");
        div.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(div);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase().includes(val)) {
                const item = document.createElement("div");
                item.innerHTML = arr[i].replace(new RegExp(val, "gi"), match => `<strong>${match}</strong>`);
                item.addEventListener("click", function() {
                    input.value = this.innerText;
                    closeAllLists();
                });
                div.appendChild(item);
            }
        }
    });

    // Handle dropdown icon click (toggle list)
    dropdownIcon.addEventListener("click", function(e) {
        const listId = input.id + "autocomplete-list";
        const existingList = document.getElementById(listId);

        if (existingList) {
            closeAllLists(); // Retract the dropdown if it's already visible
        } else {
            const div = document.createElement("div");
            div.setAttribute("id", listId);
            div.setAttribute("class", "autocomplete-items");
            input.parentNode.appendChild(div);
            for (let i = 0; i < arr.length; i++) {
                const item = document.createElement("div");
                item.innerHTML = arr[i];
                item.addEventListener("click", function() {
                    input.value = this.innerText;
                    closeAllLists();
                });
                div.appendChild(item);
            }
        }
        e.stopPropagation(); // Prevent closing the list immediately
    });

    // Handle keyboard navigation
    input.addEventListener("keydown", function(e) {
        const x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) { // Down arrow
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { // Up arrow
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) { // Enter key
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        const items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (elmnt != items[i] && elmnt != input && elmnt != dropdownIcon) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

// Initialize autocomplete for both inputs
document.addEventListener("DOMContentLoaded", () => {
    const fromInput = document.getElementById("fromStation");
    const toInput = document.getElementById("toStation");
    const fromDropdownIcon = fromInput.parentNode.querySelector(".dropdown-icon");
    const toDropdownIcon = toInput.parentNode.querySelector(".dropdown-icon");

    autocomplete(fromInput, stations, fromDropdownIcon);
    autocomplete(toInput, stations, toDropdownIcon);
});

// Calculate fare
function calculateFare() {
    const fromStation = document.getElementById("fromStation").value;
    const toStation = document.getElementById("toStation").value;
    const result = document.getElementById("result");

    if (!fromStation || !toStation || fromStation === toStation) {
        result.textContent = "Please select different valid stations!";
        result.style.backgroundColor = "#ffcccc"; // Red background for error
        result.style.color = "#721c24";
        return;
    }

    if (fareData[fromStation] && fareData[fromStation][toStation] !== undefined) {
        const fare = fareData[fromStation][toStation];
        result.innerHTML = `<span class="fare-amount">₹${fare}</span><br>from <span class="station-name">${fromStation}</span> to <span class="station-name">${toStation}</span>`;
        result.style.backgroundColor = "#d4edda"; // Green background for success
        result.style.color = "#155724";
        result.style.opacity = "0"; // Start with opacity 0 for animation
        setTimeout(() => {
            result.style.transition = "opacity 0.5s ease";
            result.style.opacity = "1"; // Fade in
        }, 10);
    } else {
        result.textContent = "Invalid station combination or fare data not available!";
        result.style.backgroundColor = "#ffcccc"; // Red background for error
        result.style.color = "#721c24";
    }
}