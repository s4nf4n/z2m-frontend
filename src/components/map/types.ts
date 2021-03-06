import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";
import { DeviceType, DeviceDefinition } from "../../types";

export interface NodeI extends SimulationNodeDatum {
    ieeeAddr: string;
    friendlyName?: string;
    type?: DeviceType;
    failed?: string[];
    lastSeen?: number;
    definition?: DeviceDefinition;
}

export type LinkType =
    "Coordinator2EndDevice" |
    "EndDevice2Coordinator" |

    "Coordinator2Router" |
    "Router2Coordinator" |

    "EndDevice2Router" |
    "Router2EndDevice" |

    "Router2Router" |

    "BrokenLink";

export interface Source extends SimulationNodeDatum {
    ieeeAddr: string;
}

export interface Target extends SimulationNodeDatum {
    ieeeAddr: string;
}
export enum ZigbeeRelationship {
    NeigbhorIsParent,
    NeigbhorIsAChild,
    NeigbhorIsASibling,
    NoneOfTheAbove,
    NeigbhorIsAFormerChild
}

export interface LinkI extends SimulationLinkDatum<NodeI> {
    source: Source;
    target: Target;
    linkquality: number;
    depth: number;
    routes: unknown[];
    sourceIeeeAddr: string;
    targetIeeeAddr: string;
    sourceNwkAddr: number;
    lqi: number;
    relationship: ZigbeeRelationship;
    linkType: LinkType;
    repeated?: boolean;
}

export interface GraphI {
    nodes: NodeI[];
    links: LinkI[];
}
