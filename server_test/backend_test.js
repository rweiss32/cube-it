/**
 * פונקציה לבדיקה האם מילה מתאימה לקטגוריה באמצעות ה-Proxy ב-Vercel
 * @param {string} word - המילה לבדיקה (למשל: "אריה")
 * @param {string} category - הקטגוריה (למשל: "בעלי חיים")
 * @returns {Promise<boolean>} - מחזירה true אם התשובה היא "כן", אחרת false
 */
async function validateWord(word, category) {
    const PROXY_URL = "https://cube-it-server.vercel.app/api/check";


    try {
        const response = await fetch(PROXY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ word, category }),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        return data.answer.trim().toLowerCase() === "yes";

    } catch (error) {
        console.error("Error validating word:", error);
        return false; // במקרה של שגיאה, נחזיר false כברירת מחדל
    }
}

// דוגמה לשימוש בקוד שלך:
async function onUserSubmit() {
    const isAnimal = await validateWord("אריה", "בעלי חיים");
    
    if (isAnimal) {
        console.log("נכון מאוד! אריה הוא בעל חיים.");
    } else {
        console.log("טעות, נסה שוב.");
    }
}