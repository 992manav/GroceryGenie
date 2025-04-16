# 🧞 GroceryGenie: AI-Powered Recovery Nutrition E-Commerce Platform

**GroceryGenie** is an intelligent, voice-activated e-commerce platform focused on health recovery and nutrition. It leverages a conversational AI assistant—**GroceryAgentVoice**—to help users discover personalized products, manage carts, and plan meals tailored to their health needs.

---

## 🌟 Key Features

### 🤖 AI Agent Integration

- Built with **Gemini 2.0 Flash** AI model
- Voice-enabled interaction using **Aoede voice**
- Detects health conditions (e.g., iron deficiency) and recommends appropriate foods
- Understands natural language and provides voice feedback

### 🛒 Smart E-Commerce Flow

- Add/remove products to/from cart using voice
- Get detailed product information
- Highlight products on the screen for visual emphasis
- Dynamic cart summaries with spoken responses

### 🧠 Health-Focused Intelligence

- Categorized product catalog: Fruits, Vegetables, Nuts, Seeds, Herbs
- Each product includes:
  - Nutritional information
  - Health benefits for recovery
  - Voice-accessible descriptions

### 🧑‍🍳 Meal Planning

- Understands user recipes (e.g., "Make Palak Paneer")
- Suggests required ingredients from the store
- Adds items to cart automatically

---

## 💻 Frontend Architecture (React)

### 🔧 Component Structure

- `Dashboard`: Main container for the store UI and global state
- `ImageCard`: Displays product visuals with highlight capability
- `Cart`: Manages cart logic, quantity control, and cost summary
- `useLiveAPIContext`: Provides access to AI-agent interaction tools

### 🎨 Interactive Tools

- `highlight_card()`: Emphasizes product visually
- `add_to_cart()`, `remove_from_cart()`, `decrease_cart_quantity()`: Cart control
- `read_cart_summary()`: Vocalizes total price and items
- `change_background()`: UI customization by voice

---

## 📦 Product Structure

Each product includes:

```json
{
  "name": "Apple",
  "price": 50,
  "image": "https://link-to-apple-image.com",
  "details": "Rich in iron, good for recovery",
}
```

---

## 🆚 What Makes GroceryGenie Unique?

Unlike standard e-commerce platforms, GroceryGenie offers a truly **intelligent and health-focused shopping experience**:

| Traditional E-Commerce           | GroceryGenie                                                  |
|----------------------------------|----------------------------------------------------------------|
| Manual browsing and filters      | Voice-first, natural language interaction                      |
| Generic product listings         | Health-condition focused product recommendations              |
| Click-based cart management      | Conversational voice commands to add/remove items             |
| Limited nutritional context      | Detailed recovery-based health benefits per product           |
| Static interface                 | Dynamic UI updates via AI (e.g., change theme, highlight items)|
| No recipe integration            | AI-guided meal planning and ingredient suggestions            |

---

## 🚀 Getting Started

Clone the repository and run the development server:

```bash
git clone https://github.com/your-username/grocerygenie.git
cd grocerygenie
npm install
npm run dev
```



