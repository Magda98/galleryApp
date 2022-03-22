export type FileContent = string

export const readFileContent = (file: File): Promise<FileContent> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === "string") {
                resolve(reader.result)
            }
            else {
                reject(new Error("empty file"))
            }
        };
        reader.onerror = error => reject(error);
    })