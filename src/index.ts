import { type Plugin, type Action, type IAgentRuntime, type Memory, type State, type HandlerCallback } from "@elizaos/core";

/**
 * Example custom action.
 * Replace this with your own action logic.
 */
const exampleAction: Action = {
  name: "EXAMPLE_ACTION",
  description: "An example action — replace with your own.",
  similes: ["DEMO", "SAMPLE"],
  validate: async (_runtime: IAgentRuntime, _message: Memory) => true,
  handler: async (
    _runtime: IAgentRuntime,
    message: Memory,
    _state?: State,
    _options?: { [key: string]: unknown },
    _callback?: HandlerCallback
  ): Promise<void> => {
    const text = message.content?.text || "no content";
    console.log("Custom action triggered with message:", text);
    // Add logic here to interact with the runtime or return something meaningful
  },
  examples: [
    [
      {
        name: "{{user1}}",
        content: { text: "Run the example action" },
      },
      {
        name: "{{user2}}",
        content: { text: "Example action executed", action: "EXAMPLE_ACTION" },
      },
    ],
  ],
};

/**
 * Your custom plugin.
 * Add this plugin's name to the `plugins` array in your character file
 * to activate it.
 */
export const customPlugin: Plugin = {
  name: "custom-plugin",
  description: "My custom ElizaOS plugin",
  actions: [exampleAction],
  providers: [],
  evaluators: [],
};

export default customPlugin;
