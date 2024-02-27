using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FullStackApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class addedCarName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CarNames",
                table: "CarReservationModels",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CarNames",
                table: "CarReservationModels");
        }
    }
}
