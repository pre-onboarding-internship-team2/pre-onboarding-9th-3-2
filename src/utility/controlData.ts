const labelUtil = (mockDataKey: string[]): string[] => {
	const labels: string[] = [];

	for (const item of mockDataKey) {
		labels.push(item.slice(11));
	}

	return labels;
};

const IdValueUtil = (mockDataId: any): string[] => {
	const valueId: string[] = [];

	for (const item of mockDataId) {
		valueId.push(item.id);
	}

	return valueId;
};

const AreaValueUtil = (mockDataArea: any): number[] => {
	const valueArea: number[] = [];

	for (const item of mockDataArea) {
		valueArea.push(item.value_area);
	}

	return valueArea;
};

const BarValueUtil = (mockDataBar: any): number[] => {
	const valueBar: number[] = [];

	for (const item of mockDataBar) {
		valueBar.push(item.value_bar);
	}

	return valueBar;
};

export { labelUtil, IdValueUtil, AreaValueUtil, BarValueUtil };
