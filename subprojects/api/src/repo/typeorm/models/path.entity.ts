import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Path {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    title: string

    @Column()
    filepath: string

    @Column()
    parent: number 
}