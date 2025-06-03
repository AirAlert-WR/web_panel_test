import {z} from "zod";

/**
 * Zod schema for a controller ID
 *
 * @author Danilo Bleul
 * @since 1.0
 */
export const ControllerIDSchema = z
    .string()
    .nonempty("ID cannot be empty")
    // TODO Format checking
/**
 * Type for the controller ID
 *
 * @author Danilo Bleul
 * @since 1.0
 */
export type ControllerID = z.infer<typeof ControllerIDSchema>

/**
 * Type for the set of controller ids
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @see ControllerID
 */
export type ControllerSet = Set<ControllerID>

/**
 * Zod schema for a struct of controller properties
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @member id Id of the controller
 * @see ControllerID
 * @member interval Time interval (in s) for repeating the measuring task
 */
export const ControllerPropertiesSchema = z.object({
    id: ControllerIDSchema,
    interval: z
        .number()
        .int()
        .min(10),
})
/**
 * Type for the controller properties
 *
 * @author Danilo Bleul
 * @since 1.0
 */
export type ControllerProperties = z.infer<typeof ControllerPropertiesSchema>
export const ControllerProperties: ControllerProperties = {
    id: "new_controller",
    interval: 15
}

/**
 * Type for the air measurement data
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @member pm2_5 Amount of pm2.5-Particles in the air
 * @member pm10 Amount of pm10-Particles in the air
 * @member temperature Environmental temperature
 * @member co2 Carbon dioxide concentration in the air
 * @member humidity Relative humidity in the environment
 */
export type MeasurementData = {
    pm2_5: number,
    pm10: number,
    temperature: number,
    co2: number,
    humidity: number,
}

/**
 * Type for the measurement data bound to a controller
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @member controllerID Controller performed the measurement
 * @see ControllerID
 * @member data Nested measurement data
 * @see MeasurementData
 */
export type BoundMeasurementData = {
    controllerID: ControllerID
    data: MeasurementData
}

/**
 * Type for a global data entry, identified by a time stamp
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @member timestamp Time id (ISO format) from Server
 * @member data Array of nested measurement data
 * @see BoundMeasurementData
 */
export type FilteredMeasurementData = {
    timestamp: string,
    data: BoundMeasurementData[]
}