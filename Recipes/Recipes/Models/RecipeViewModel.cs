using System;
using System.Collections.Generic;

namespace Recipes.Models
{
    public class RecipeViewModel
    {
        public RecipeViewModel()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; private set; }
        public string Title { get; set; }
        public DateTimeOffset Date { get; set; }
        public string Author { get; set; }
        public IEnumerable<string> Ingedients{get;set;}
        public IEnumerable<string> Instructions { get; set; }
        public IEnumerable<string> Tags { get; set; }
        public IEnumerable<string> Comments { get; set; }
        public string PictureUrl { get; set; }
        public string PictureDescription { get; set; }
    }
}