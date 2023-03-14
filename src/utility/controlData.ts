export const labelUtil = (mockDataKey: string[]): string[] => {
	const labels: string[] = [];

	for (const item of mockDataKey) {
		labels.push(item.slice(11));
	}

	return labels;
};

export const AreaValueUtil = (mockDataArea: any): number[] => {
	const valueArea: number[] = [];

	for (const item of mockDataArea) {
		valueArea.push(item.value_area);
	}

	return valueArea;
};
export const BarValueUtil = (mockDataBar: any): number[] => {
	const valueBar: number[] = [];

	for (const item of mockDataBar) {
		valueBar.push(item.value_bar);
	}

	return valueBar;
};
