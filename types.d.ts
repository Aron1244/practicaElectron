type Statistics = {
    cpuUsage : number;
    ramUsage: number;
    storageData: number;
};

type StaticData = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
};

interface Window {
    electron: {
        subscribeStatistics: (callback: (stats: Statistics) => void) => void;
        getStaticData: () => StaticData;
    }
}