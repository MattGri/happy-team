using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FullStackApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class addedCarPrice : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CarPrice",
                table: "CarModels",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CarPrice",
                table: "CarModels");
        }
    }
}
