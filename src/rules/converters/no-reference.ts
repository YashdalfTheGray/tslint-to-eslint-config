import { RuleConverter } from "../converter";

export const convertNoReference: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-triple-slash-reference",
            },
        ],
    };
};
