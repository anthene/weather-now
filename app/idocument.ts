export interface IDocument {
	getElementById(elemId: string): {
		innerHTML: string;
		classList: {
			add(item: string);
			remove(item: string);
		}
	};
}
