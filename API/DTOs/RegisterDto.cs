using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }
        
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Lösenordet måste vara komplext")]
        public string Password { get; set; }
        
        [Required]
        public string DisplayName { get; set; }

        [Required]
        public string Username { get; set; }
    }
}