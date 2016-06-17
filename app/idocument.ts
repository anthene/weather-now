export interface IDocument {
	getElementById(elemId: string): {
		classList: {
			add(item: string): void;
			remove(item: string): void;
		}
	};
	// todo: think on any
	getElementsByName(name: string): NodeListOf<any>;
}
