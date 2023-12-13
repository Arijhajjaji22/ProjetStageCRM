package net.javaguides.springboot.security;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

@Component
public class MailUserAuthenticationProvider implements AuthenticationProvider {


        private final UserRepository userRepository; // Replace UserRepository with your actual repository for User entity

        public MailUserAuthenticationProvider(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        @Override
        public Authentication authenticate(Authentication authentication) throws AuthenticationException {
            String email = authentication.getName();
            String password = authentication.getCredentials().toString();

            User user = this.userRepository.findByEmail(email);

            if (user == null) {
                throw new BadCredentialsException("Username / Password was not found");
            }

            if (!user.getPassword().equals(password)) {
                throw new BadCredentialsException("Invalid password");
            }

            // If the credentials are valid, return a new UsernamePasswordAuthenticationToken
            // with user information and associated roles.
            return new UsernamePasswordAuthenticationToken(user, user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_USER"));
        }

        @Override
        public boolean supports(Class<?> authentication) {
            // Indicate that this authentication provider class supports UsernamePasswordAuthenticationToken objects.
            return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
        }
    }

