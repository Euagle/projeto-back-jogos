import { TGamersDB } from "../types";

export class Gamer{
constructor(
    private id: string,
    private name: string,
    private price: number,
    private platform: string

    ){}

        public getId(): string {
            return this.id
        }
        
        public setId(value: string): void {
            this.id = value
        }
        public getName(): string {
            return this.name
        }
        
        public setName(value: string): void {
            this.id = value
        }
        public getPrice(): number {
            return this.price
        }
        
        public setPrice(value: number): void {
            this.price = value
        }
        public getPlatform(): string {
            return this.platform
        }
        
        public setPlatform(value: string): void {
            this.platform = value
        }
        public toDBModel(): TGamersDB {
            return {
                id: this.id,
                name: this.name,
                price: this.price,
                platform: this.platform
            }
        }
    

}
