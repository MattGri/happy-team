using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FullStackApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class DeletedName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "RegisterModels");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "RegisterModels",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
