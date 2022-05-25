export default {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
  },
  required: ["name"],
} as const;
