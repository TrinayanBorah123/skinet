using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.Dtos
{
    public class CustomerBusketDto
    {
        [Required]
        public string Id { get; set; }
        public List<BasketItem> Items { get; set; }
    }
}