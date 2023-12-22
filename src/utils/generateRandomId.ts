export default function generateRandomId() {
  return "input_" + Math.random().toString(36).substring(0, 9);
}
