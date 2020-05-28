using System.Collections.Generic;

namespace API.Errors
{
    public class PiValidationErrorResponse : ApiResponse
    {
        public PiValidationErrorResponse() : base(400)
        {
        }
        public IEnumerable<string> Errors { get; set; }
    }
}