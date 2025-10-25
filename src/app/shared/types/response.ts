export type Response<T> = {
	successful: boolean;
	message: string;
	data: T | null;
};
