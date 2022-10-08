import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class PostRefactoring1665116042163 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "abc",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "int",
                    },
                ],
            }),
            true,
        )

    }

    async down(queryRunner: QueryRunner): Promise<void> {
    }
}
