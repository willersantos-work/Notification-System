import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
    port: process.env.PORT || 8000,
    productionEnvironmentName: "production",
    localEnvironmentName: "local"
}));
