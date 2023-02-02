import {GvasHeader, GvasMap, GvasString, GvasTypes} from './Gvas';
import {IndustryType} from './IndustryType';
import {Rotator} from './Rotator';
import {Vector} from './Vector';

/**
 * A simplified save state that can be modified in Railroad Studio.
 *
 * Can be created from or converted to a {@link Gvas} for serializaiton.
 */
export interface Railroad {
    _header: GvasHeader;
    _order: string[];
    _types: GvasMap<GvasTypes>;
    frames: Frame[];
    industries: Industry[];
    players: Player[];
    sandhouses: Sandhouse[];
    switches: Switch[];
    turntables: Turntable[];
    watertowers: Watertower[];
    removedVegetationAssets: Vector[];
    saveGame: {
        date: GvasString;
        uniqueId: GvasString;
        uniqueWorldId: GvasString;
        version: GvasString;
    };
    splines: Spline[];
    splineTracks: SplineTrack[];
}

export interface Frame {
    location: Vector;
    name: GvasString;
    number: GvasString;
    rotation: Rotator;
    type: GvasString;
    state: FrameState;
}

export interface FrameState {
    boilerFireTemp: number;
    boilerFuelAmount: number;
    boilerPressure: number;
    boilerWaterLevel: number;
    boilerWaterTemp: number;
    brakeValue: number;
    compressorAirPressure: number;
    compressorValveValue: number;
    couplerFrontState: boolean;
    couplerRearState: boolean;
    freightAmount: number;
    freightType: GvasString;
    generatorValveValue: number;
    headlightFrontState: boolean;
    headlightRearState: boolean;
    headlightType: number;
    markerLightsCenterState?: number;
    markerLightsFrontLeftState: number;
    markerLightsFrontRightState: number;
    markerLightsRearLeftState: number;
    markerLightsRearRightState: number;
    paintType?: number;
    regulatorValue: number;
    reverserValue: number;
    sanderAmount?: number;
    smokestackType: number;
    tenderFuelAmount: number;
    tenderWaterAmount: number;
}

export type NumericFrameStateKeys = (
     'boilerFireTemp' |
     'boilerFuelAmount' |
     'boilerPressure' |
     'boilerWaterLevel' |
     'boilerWaterTemp' |
     'brakeValue' |
     'compressorAirPressure' |
     'compressorValveValue' |
     'generatorValveValue' |
     'headlightType' |
     'markerLightsCenterState' |
     'markerLightsFrontLeftState' |
     'markerLightsFrontRightState' |
     'markerLightsRearLeftState' |
     'markerLightsRearRightState' |
     'paintType' |
     'regulatorValue' |
     'reverserValue' |
     'sanderAmount' |
     'smokestackType' |
     'tenderFuelAmount' |
     'tenderWaterAmount');

export interface Industry {
    location: Vector;
    rotation: Rotator;
    inputs: [number, number, number, number];
    outputs: [number, number, number, number];
    type: IndustryType;
}

export interface Player {
    id?: GvasString;
    name: GvasString;
    location?: Vector;
    rotation?: number;
    money: number;
    xp: number;
}

export interface Sandhouse {
    location: Vector;
    rotation: Rotator;
    type: SandhouseType;
}

export enum SandhouseType {
    sandhouse = 0,
}

export interface Spline {
    controlPoints: Vector[];
    location: Vector;
    segmentsVisible: boolean[];
    type: SplineType;
}

export interface SplineTrack {
    endPoint: Vector;
    endSpline1Id?: number;
    endSpline2Id?: number;
    endTangent: Vector;
    location: Vector;
    paintStyle: number;
    rotation: Rotator;
    startPoint: Vector;
    startSplineId?: number;
    startTangent: Vector;
    switchState: number;
    type: GvasString;
}

export enum SplineType {
    rail = 0,
    variable_grade = 1,
    constant_grade = 2,
    wooden_bridge = 3,
    rail_deck = 4,
    variable_stone_wall = 5,
    constant_stone_wall = 6,
    steel_bridge = 7,
}

export interface Switch {
    location: Vector;
    rotation: Rotator;
    state: number;
    type: SwitchType;
}

export enum SwitchType {
    leftSwitchLeft = 0,
    rightSwitchRight = 1,
    leftSwitchRight = 4,
    rightSwitchLeft = 5,
    diamond = 6,
}

export interface Turntable {
    deckRotation?: Rotator;
    location: Vector;
    rotator: Rotator;
    type: TurntableType;
}

export enum TurntableType {
    dark = 0,
    light = 1,
}

export interface Watertower {
    location: Vector;
    rotation: Rotator;
    waterlevel: number;
    type: number;
}
