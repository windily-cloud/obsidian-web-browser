// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as obsidian from 'obsidian';
import { Menu } from "obsidian";

declare module "obsidian" {
	export interface ItemView {
		headerEl: HTMLDivElement
	}

	interface App {
		plugins: {
			getPlugin(name: string): any;
		};
	}

	export interface WorkspaceLeaf {
		id: string
		history: {
			backHistory: Array<any>,
			forwardHistory: Array<any>
		},
		tabHeaderInnerIconEl: HTMLDivElement,
		tabHeaderInnerTitleEl: HTMLDivElement
	}

	export interface MenuItem {
		setSubmenu: () => Menu;
	}
}
