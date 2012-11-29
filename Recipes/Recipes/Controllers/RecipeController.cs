using System;
using System.Collections.Generic;
using System.Web.Http;
using Recipes.Models;

namespace Recipes.Controllers
{
    public class RecipeController : ApiController
    {
        public IEnumerable<RecipeViewModel> Get()
        {
            return new[]
                {
                    new RecipeViewModel
                        {
                            Author = "Loc Tan Vo",
                            Comments = new[] {"Mmmm, delicious!"},
                            Date = DateTimeOffset.Now,
                            Ingedients = new[]
                                {

                                    "500g lovely greens, such as white cabbage, Savoy cabbage, Brussels tops or cavolo nero, leaves separated, stalks finely sliced"
                                    ,
                                    "A large bunch of fresh rosemary",
                                    "1 x 2kg shoulder of lamb",
                                    "olive oil",
                                    "sea salt and freshly ground black pepper",
                                    "1 bulb of garlic, unpeeled, broken into cloves"
                                },
                            Instructions = new[]
                                {
                                    "Preheat your oven to full whack. Slash the fat side of the lamb all over with a sharp knife. Lay half the sprigs of rosemary and half the garlic cloves on the bottom of a high-sided roasting tray, rub the lamb all over with olive oil and season with salt and pepper. Place it in the tray on top of the rosemary and garlic, and put the rest of the rosemary and garlic on top of the lamb. Tightly cover the tray with tinfoil and place in the oven. Turn the oven down immediately to 170°C/325°F/gas 3 and cook for 4 hours – it’s done if you can pull the meat apart easily with two forks.",
                                    "When the lamb is nearly cooked, put your potatoes, carrots and swede into a large pot of boiling salted water and boil hard for 20 minutes or so until you can slide a knife into the swede easily. Drain and allow to steam dry, then smash them up in the pan with most of the butter. If you prefer a smooth texture, add some cooking water. Spoon into a bowl, cover with tinfoil and keep warm over a pan of simmering water.",
                                    "Remove the lamb from the oven and place it on a chopping board. Cover it with tinfoil, then a tea towel, and leave it to rest. Put a large pan of salted water on to boil for your greens. Pour away most of the fat from the roasting tray, discarding any bits of rosemary stalk. Put the tray on the hob and mix in the flour. Add the stock, stirring and scraping all the sticky goodness off the bottom of the tray. You won’t need gallons of gravy, just a couple of flavoursome spoonfuls each. Add the capers, turn the heat down and simmer for a few minutes.",
                                    "Finely chop the mint and add it to the sauce with the red wine vinegar at the last minute then pour into a jug. Add your greens and stalks to the pan of fast-boiling salted water and cook for 4 to 5 minutes to just soften them. Drain and toss with a knob of butter and a pinch of salt and pepper. Place everything in the middle of the table, and shred the lamb in front of your guests. Absolutely delish!"
                                },
                            PictureDescription = "Image found on Flickr with CC license",
                            PictureUrl = "Images/bun.jpg",
                            Tags = new []{"lamb", "rosemarin", "shoulder", "slow roast"},
                            Title = "Incredible Roasted Shoulder of Lamb with Smashed Veg and Greens"
                        }
                };
        }

        // GET api/recipe/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/recipe
        public void Post(string value)
        {
        }

        // PUT api/recipe/5
        public void Put(int id, string value)
        {
        }

        // DELETE api/recipe/5
        public void Delete(int id)
        {
        }
    }
}
